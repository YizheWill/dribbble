class CreateCollections < ActiveRecord::Migration[6.0]
  def change
    create_table :collections do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :shot, null: false, foreign_key: true
      t.string :title, null: false

      t.timestamps
    end
  end
end
