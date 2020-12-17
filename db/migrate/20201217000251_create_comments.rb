class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :body, null: false
      t.belongs_to :shot, null: false, foreign_key: true

      t.timestamps
    end
  end
end
