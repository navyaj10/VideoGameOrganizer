class DevelopersController < ApplicationController
  def index
  	render :partial => "developers_info"
  end
end
