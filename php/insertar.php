<?php
require_once "modelo.php";

class campos extends connection
{

    public function insertCampos($herencia, $posicion, $evento, $etiqueta, $attr, $hipperText)
    {
        $do = $this->link->prepare("
            INSERT INTO campos SET
            herencia=:herencia,
            posicion=:posicion,
            evento=:evento,
            etiqueta=:etiqueta,
            attr=:attr,
            hipperText=:hipperText
        ");
        $do->bindParam(':herencia', $herencia);
        $do->bindParam(':posicion', $posicion);
        $do->bindParam(':evento', $evento);
        $do->bindParam(':etiqueta', $etiqueta);
        $do->bindParam(':attr', $attr);
        $do->bindParam(':hipperText', $hipperText);
        $do->execute();
    }
}
// $herencia, $posicion, $evento, $etiqueta, $attr, $hipperText
// (new campos)->insertCampos(2, 2, 1, 'div', '{"class":"row"}', '');
// (new campos)->insertCampos(10, 2, 1, 'div', '{"class":"col-md-6"}', '');
// (new campos)->insertCampos(11, 0, 1, 'label', '{"for":"test"}', 'Test2');
// (new campos)->insertCampos(11, 0, 1, 'input', '{"type":"text","name":"test","id":"test","class":"form-control input-lg","placeholder":"text"}', '');
// (new campos)->insertCampos(10, 2, 1, 'div', '{"class":"col-md-6"}', '');
// (new campos)->insertCampos(15, 0, 1, 'label', '{"for":"test"}', 'Test2');
// (new campos)->insertCampos(15, 0, 1, 'input', '{"type":"text","name":"test","id":"test","class":"form-control input-lg","placeholder":"text"}', '');
