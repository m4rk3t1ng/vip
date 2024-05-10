import React from "react"

import Layout from "../components/layout"
import Timer from "../components/subastas/timer"
import moment from 'moment'

//TODO: la deadline será una variable que vendrá de una llamada a la API y habrá que modificar esta variable hardcodeada


const TimerPage = () => (
  <Layout>
    <div><Timer deadline ={moment("2022-11-17T23:10:01")}/></div>
  </Layout>
)

export default TimerPage