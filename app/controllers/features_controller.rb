class FeaturesController < ApplicationController
  def index
    @features = Feature.includes(:user)
  end
end
