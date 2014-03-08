class Post < ActiveRecord::Base
	belongs_to :user
	has_attached_file :photo, :styles => { :medium => ["570", :png], :thumb => ["400x400>", :png] }

end
