class TeamController < ApplicationController
    def create
        Team.destroy_all

        team = Team.new(team_name: params[:name])
        pok1 = Pokemon.find_by(dex_num: params[:pok1][:dex_num])
        pok1.team_id = team.id
        pok2 = Pokemon.find_by(dex_num: params[:pok2][:dex_num])
        pok2.team_id = team.id
        pok3 = Pokemon.find_by(dex_num: params[:pok3][:dex_num])
        pok3.team_id = team.id
        if team.save
            @json = {pok1: params[:pok1], pok2: params[:pok2], pok3: params[:pok3], name: params[:name], id: team.id}
            render json: @json
        else 
            render json: {error: "That sucks"}
        end
    end

    def destroy
        team = Team.find_by(id: params[:id])
        team.destroy
    end

    def show 
        team = Team.find_by(id: params[:id])
    end
end