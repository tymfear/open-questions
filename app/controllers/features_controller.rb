class FeaturesController < ApplicationController
  before_action :authenticate_user!

  def index
    @features = Feature.includes(:user)
  end
end
