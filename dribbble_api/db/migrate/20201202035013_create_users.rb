class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :tier, default: 0
      t.string :location
      t.text :bio
      t.string :personal_website_url
      t.string :portfolio_url
      t.string :portfolio_password
      t.string :twitter_url
      t.string :facebook_url
      t.string :github_url
      t.boolean :work_availability, default: false

      t.timestamps
    end
  end
end
