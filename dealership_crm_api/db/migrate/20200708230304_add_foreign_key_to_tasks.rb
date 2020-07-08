class AddForeignKeyToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :sprocess_id, :integer
  end
end
