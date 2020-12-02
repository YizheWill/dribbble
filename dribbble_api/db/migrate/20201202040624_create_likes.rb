class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.integer :likable_id
      t.string :likable_type

      t.timestamps
    end
    add_index :likes, [:likable_id, :likable_type]
  end
end
