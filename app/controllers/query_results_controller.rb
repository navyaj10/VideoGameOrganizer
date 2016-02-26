# encoding: utf-8
require 'json'
class QueryResultsController < ApplicationController
  def index
    begin
  	@jsonData = JSON.parse(File.read( "./data/queries.json" ))
  	render :partial => "execute_query"
    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "error"
    end 
  end
  def execute
    begin

  	@jsonData = JSON.parse(File.read( "./data/queries.json" ))
  	@query = @jsonData[params[:key].to_i]["query"]

  	require 'yaml'

  	@raw_config = File.read("config/database.yml")
	  @APP_CONFIG = YAML.load(@raw_config)

	  ActiveRecord::Base.establish_connection("development")

  	@result = ActiveRecord::Base.connection.execute(@query)

  	@meta = @result.fields

  	render :partial => "output_query"

    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "error"
    end
  end	
  def execute_cquery
    begin

    @jsonData = JSON.parse(request.body.read)
    @query = @jsonData["query"]

    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")

    @result = ActiveRecord::Base.connection.execute(@query)

    @meta = @result.fields

    render :partial => "output_query"

    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "error"
    end
  end 
end
