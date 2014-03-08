require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "test find user" do
  	user = User.where(id: 1).first
  	assert_not_nil(user, "user nil")
  	assert_not_nil(user.username, "username nil")
  end

  test "test create user" do
  	user = User.new()
  	user.username = 'david'
  	assert_not_nil(user.save, "create user not nil")
  	#puts user.to_json
  	puts user.valid?
  end

end
