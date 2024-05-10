import { useIntl } from 'gatsby-plugin-intl'
import constants from "../utils/constants"

export const SubastasService = ({intl}) => {

    function getSubastas() {
        var fetchUrl = constants.getSubastas
        return fetch(fetchUrl, {
            headers: {
                Accept: 'application/json',
                'Accept-Language': intl.locale
            }
        }).then((resp) => {
            return resp.json()
        })
    }

    function postBid(id , data){
        var fetchUrl = constants.postBid
        return fetch(fetchUrl + id + "/bids", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-Language': intl.locale,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((resp) => {
            return resp.json()
        })
    }

    function getSubasta(id) {
        var fetchUrl = constants.getSubasta
        return fetch(fetchUrl+ id, {
            headers: {
                Accept: 'application/json',
                'Accept-Language': intl.locale
            }
        }).then((resp) => {
            return resp.json()
        })
    }

    return {
        getSubastas, postBid, getSubasta
    }

}
