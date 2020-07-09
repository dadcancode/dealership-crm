class CreateSprocesses < ActiveRecord::Migration[6.0]
  def change
    create_table :sprocesses do |t|
      t.string :name

      t.timestamps
    end
  end
end
