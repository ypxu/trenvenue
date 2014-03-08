class User < ActiveRecord::Base

	has_many :posts

	validates_presence_of :username
	validate :username_validator
	validate :password_validator

	def username_validator
		
	end

	def password_validator
		#puts "password"
		#false
	end
end
