<?php
require_once "modelo.php";

class getConsulta extends connection
{
    public function getCamposCreate()
    {
        $consulta = $this->link->prepare("
            SELECT * FROM campos WHERE evento = 0 ORDER BY posicion ASC
        ");
        $consulta->execute();
        return ($consulta->fetchAll(PDO::FETCH_ASSOC));
    }
    public function getCamposAdd($herencia)
    {
        $consulta = $this->link->prepare("
            SELECT * FROM campos WHERE evento = 1 AND herencia=:herencia ORDER BY posicion ASC
        ");
        $consulta->bindParam(":herencia", $herencia);
        $consulta->execute();
        return ($consulta->fetchAll(PDO::FETCH_ASSOC));
    }
}
