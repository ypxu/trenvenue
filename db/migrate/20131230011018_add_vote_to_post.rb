class AddVoteToPost < ActiveRecord::Migration
  def change
    add_column :posts, :vote_count, :integer, :default => 0
  end
end
