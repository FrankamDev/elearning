<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = ['cours_id', 'title', 'content', 'video_url', 'video_path'];

    public function cours()
    {
        return $this->belongsTo(Cours::class, 'cours_id');
    }
}
