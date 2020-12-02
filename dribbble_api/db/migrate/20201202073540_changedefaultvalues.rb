class Changedefaultvalues < ActiveRecord::Migration[6.0]
  def up
    change_column_default :shots, :price, 0.0
  end

  def down
    change_column_default :shots, :price, 1.0
  end
end
