class Feature < ActiveRecord::Base
  belongs_to :user
  has_many :questions

  STATUS = { closed: 1, open: 2 }

  validates :name, presence: true
  validates :status, inclusion: { in: STATUS.values }


  scope :opened, -> {where status: STATUS[:open]}
end
