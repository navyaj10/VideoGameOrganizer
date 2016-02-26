require 'json'
require 'date'
class NewGameController < ApplicationController
  def index
   
    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")

    @query = "select game_id, games from games;"
    @game_list = ActiveRecord::Base.connection.execute(@query)

  	render :partial => "add_new_game"
  end
  def execute
    begin

    @data = JSON.parse(request.body.read)
    @gameTitle = @data["gameTitle"]
    @price = @data["price"]
    @purchaseDate = @data["purchaseDate"]
    @condition = @data["condition"]
    @completeness = @data["completeness"]
    @bonus = @data["bonus"]
    @sell = @data["sell"]

    @q = "insert into my_collection values(#{@gameTitle}, #{@price}, '#{@purchaseDate}','#{@condition}','#{@completeness}','#{@bonus}','#{@sell}')"

    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")
	  ActiveRecord::Base.connection.execute(@q)

    render :partial => "status"

    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "query_results/error"
    end
  end 
end
