class Changedatatype < ActiveRecord::Migration[6.0]
  def change
    remove_column :shots, :price
    add_column :shots, :price, :decimal
  end
end
