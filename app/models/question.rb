class Question < ActiveRecord::Base
  belongs_to :user
  belongs_to :feature

  validates :body, presence: true

  scope :featured, -> (feature_id) {where feature_id: feature_id}
end
