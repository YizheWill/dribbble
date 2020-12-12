class AddAvatarUrlToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :avatar_url, :string, default: 'https://res.cloudinary.com/willwang/image/upload/v1607723511/avatar_l9tddb.png'
  end
end
