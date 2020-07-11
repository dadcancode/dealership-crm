class Prospect < ApplicationRecord
    belongs_to :user
    belongs_to :vehicle
    # belongs_to :sprocesses
    # has_many :tasks, through: :sprocesses
end
