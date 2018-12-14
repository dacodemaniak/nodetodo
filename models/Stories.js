/**
 * Connexion à la base de données
 */
var db = require('../dbconnection');

var Stories = {
    /**
     * Retourne les stories appartenant à un utilisateur
     * @param {*} id Identifiant de l'utilisateur
     * @param {*} callback Fonction callback qui sera retournée au routeur
     */
    getByUserId(id, callback) {
        return db.query(
            'SELECT s.id, s.title, s.description, s.begin_at, s.estimated_ended, bv.libelle ' +
            ' FROM team_members tm INNER JOIN stories s ON tm.id = s.team_members_id ' +
            'INNER JOIN business_values bv ON s.business_values_id = bv.id ' + 
            ' WHERE tm.id = ? ' +
            'ORDER BY s.begin_at DESC;',
            [id],
           callback
        );
    },
    /**
     * Retourne les stories appartenant à un utilisateur
     * @param {*} id Identifiant de l'utilisateur
     * @param {*} callback Fonction callback qui sera retournée au routeur
     */
    getAll(callback) {
        return db.query(
            'SELECT s.id, s.title, s.description, s.begin_at, s.estimated_ended, bv.libelle, ' +
            'tm.id, tm.forname, tm.lastname ' +
            ' FROM team_members tm INNER JOIN stories s ON tm.id = s.team_members_id ' +
            'INNER JOIN business_values bv ON s.business_values_id = bv.id ' +
            'ORDER BY s.begin_at DESC;',
           callback
        );
    },
}

// Exposer la classe en l'exportant
module.exports = Stories;

