class Sprocess < ApplicationRecord
    has_many :tasks
    has_many :prospects
end
