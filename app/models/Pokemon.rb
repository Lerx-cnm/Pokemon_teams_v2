class Pokemon < ApplicationRecord
    belongs_to :team, optional: true
end