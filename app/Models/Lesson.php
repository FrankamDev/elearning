<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
 protected $fillable = [
        'cours_id',
        'title',
        'video_path',
        'content',
    ];

    public function cours()
    {
        return $this->belongsTo(Cours::class);
    }
    public function progress()
{
    return $this->hasMany(Progress::class);
}

}
