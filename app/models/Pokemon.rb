class Pokemon < ApplicationRecord
    belongs_to :weakness
    belongs_to :strength
end