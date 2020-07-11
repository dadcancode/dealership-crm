class AddTaskArraysToProspects < ActiveRecord::Migration[6.0]
  def change
    remove_column :prospects, :tasks
    add_column :prospects, :task_due_dates, :integer, array: true, default: []
    add_column :prospects, :task_type, :string, array: true, default: []
    add_column :prospects, :task_completed, :boolean, array: true, default: []
    add_column :prospects, :task_notes, :text, array: true, default: []
  end
end
