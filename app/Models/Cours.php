<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cours extends Model
{

      protected static function booted()
    {
        static::creating(function ($cours) {
            if (empty($cours->slug)) {
                $cours->slug = Str::slug($cours->title);
            }
        });
    }


    use HasFactory;

    public function category() {
        return $this->belongsTo(Category::class);
    }
 protected $fillable = [
        'title',
        'description',
        'category_id',
        'video_url',
        'user_id',
    ];

    public function lessons() {
        return $this->hasMany(Lesson::class);
    }


}
