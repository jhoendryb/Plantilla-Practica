<?php
class connection
{
    public $link;
    public function __construct()
    {
        try {
            $this->link = new PDO("mysql:host=localhost;dbname=formularios", 'root', '');
        } catch (PDOException $conexion) {
            echo "Se murio la FLor";
        }
    }
    public function __destruct()
    {
        $this->link = null;
    }
}
