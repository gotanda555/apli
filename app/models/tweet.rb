class Tweet < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user, dependent: :destroy

  def self.search(search)
    return Tweet.all unless search
    self.where('title LIKE(?)',"%#{search}%")
  end
end
