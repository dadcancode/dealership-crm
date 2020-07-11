class AddForeingKeyToProspectsForSprocess < ActiveRecord::Migration[6.0]
  def change
    add_column :prospects, :sprocess_id, :integer
  end
end
