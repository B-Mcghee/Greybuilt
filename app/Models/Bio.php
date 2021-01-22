<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bio extends Model
{
    use HasFactory;
    protected $fillable =['position', 'content', 'user_id', 'image_id'];

    public function cover_image(){

        return $this->hasOne(Image::class, 'image_id');
    }

    public function user(){

        return $this->hasOne(User::class,'user_id');
    }
}
