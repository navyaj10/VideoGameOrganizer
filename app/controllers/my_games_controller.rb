class MyGamesController < ApplicationController
  def index

    @query = "select * from platform"

    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")

    @platform_list = ActiveRecord::Base.connection.execute(@query)

    @query = "select distinct(genre) from games"

    @genre_list = ActiveRecord::Base.connection.execute(@query)

  	render :partial => "my_games_list"
  end
  def execute
    begin

    @jsonData = JSON.parse(request.body.read)
    @platform = @jsonData["platform"] == "All" ? "%%" : @jsonData["platform"]
    @genre = @jsonData["genre"] == "All" ? "%%" : @jsonData["genre"]

    @query = "select g.games as 'Games', mc.purc_date as 'Date of Purchase', mc.cond as 'Condition', mc.comp as 'Completeness', mc.price as 'Money paid', r.cur_val as 'Current Value' " +
    "from `videogames2`.`my_collection` mc, `videogames2`.`release` r, `videogames2`.`games` g, `videogames2`.`platform` p " +
    "where mc.g_id = g.game_id and g.game_id = r.g_id and r.pl_id = p.plat_id and p.plat_id like '#{@platform}' and g.genre like '#{@genre}';"

    require 'yaml'

    @raw_config = File.read("config/database.yml")
    @APP_CONFIG = YAML.load(@raw_config)

    ActiveRecord::Base.establish_connection("development")

    @result = ActiveRecord::Base.connection.execute(@query)

    @meta = @result.fields

    render :partial => "query_results/output_query"

    rescue Exception => exc
       @exception_msg = exc.message
       render :partial => "query_results/error"
    end
  end 
end
