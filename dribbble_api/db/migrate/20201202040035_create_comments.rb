class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :commenter_id, null: false
      t.belongs_to :shot, null: false, foreign_key: true
      t.integer :commentee_id
      t.string :body, null: false
      t.integer :parent_comment_id

      t.timestamps
    end
  end
end
