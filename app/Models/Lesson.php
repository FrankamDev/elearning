<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    public function cours()
    {
        return $this->belongsTo(Cours::class);
    }
    public function progress()
{
    return $this->hasMany(Progress::class);
}

}
