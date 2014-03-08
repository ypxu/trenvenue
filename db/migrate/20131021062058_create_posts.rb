class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :user
      t.string :title
      t.string :description
      t.string :img_url
      t.string :src
      t.string :src_url
      t.timestamps
    end
  end
end
