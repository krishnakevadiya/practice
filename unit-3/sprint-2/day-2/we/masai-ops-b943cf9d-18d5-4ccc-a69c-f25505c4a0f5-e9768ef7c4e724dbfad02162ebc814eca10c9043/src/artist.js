function Artist(name, skill, profession){
    this.name=name;
    this.skill=skill;
    this.profession=profession
}
Artist.prototype.getProfession=function(){
    return this.profession;
}
Artist.prototype.print=function(){
    return `I am ${this.name}`
}


var artistsObject = (
    'Rahul Dravid', 'Cricket', "Cricketer"
)

// Do not change this
export {Artist, artistsObject};
