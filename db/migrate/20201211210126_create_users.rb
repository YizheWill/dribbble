class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :tier, default: 0, null: false
      t.text :bio, default: ''
      t.string :location, default: ''
      t.string :personal_url, default: ''
      t.string :portfolio_url, default: ''
      t.string :portfolio_password, default: ''
      t.string :twitter, default: 'https://twitter.com'
      t.string :facebook, default: 'https://facebook.com'
      t.string :github, default: 'https://github.com'
      t.boolean :available, default: false

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
