/**
 * Connexion à la base de données
 */
var db = require('../dbconnection');

var Users = {
        /**
     * Retourne un Utilisateur à partir de son login et son mot de passe
     * @param {*} login Nom d'utilisateur
     * @param password Mot de passe
     * @param {*} callback Fonction callback qui sera retournée au routeur
     */
    getUser(login, password, callback) {
        return db.query(
           'SELECT m.id, m.username, m.forname, m.lastname, m.civilite, t.libelle ' +
           'FROM team_members AS m INNER JOIN team_groups AS t ' +
           'ON m.team_groups_id = t.id ' +
           'WHERE username=? AND secure_password=?',
           [login, password],
           callback
        );
    },
}

// Exposer la classe en l'exportant
module.exports = Users;

