var Animal = function(options){
    this.name = options.name;
    this.type = options.type;
    this.feedingTimes = options.feedingTimes || [];

}

module.exports = Animal;