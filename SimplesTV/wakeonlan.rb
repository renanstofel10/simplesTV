#!/usr/bin/ruby
# Based on: https://gist.github.com/dgv/2865897 and https://gist.github.com/zunda/187139
# Idea from: https://github.com/efpe/amazon-alexa-lg-tv
# In order for this to work, first go to the TV "General" settings and turn on "Mobile TV On".

# Change this to the actual value.
# First find the TV IP, e.g. from your router's list of connected devices.
# Then run "arp -a" on a computer and you'll see the MAC by its IP.
# Maybe you need to "ssh <the ip>" before it will turn up in arp. Not sure.
TV_MAC_ADDRESS = "78:5d:c8:48:5e:da"

require "socket"

def send_wake_on_lan_packet_to_mac_address(mac_address)
  
  addr = ['<broadcast>', 9]
  
  socket = UDPSocket.new

  socket.setsockopt(Socket::SOL_SOCKET, Socket::SO_BROADCAST, true)

  turnON = "\xFF".force_encoding(Encoding::ASCII_8BIT)*6 + [ mac_address.gsub( /:/, '' ) ].pack( 'H12' )*16

  socket.send(turnON, 0, addr[0], addr[1])

  puts("Pacote Wake-On-Lan enviado para o endereço MAC "+ mac_address)

end

send_wake_on_lan_packet_to_mac_address(TV_MAC_ADDRESS)