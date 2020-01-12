class Like < ApplicationRecord
  belongs_to :tweet, dependent: :destroy
  belongs_to :user, dependent: :destroy
  validates_uniqueness_of :tweet_id, scope: :user_id
end
