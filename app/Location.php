<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Location extends Model
{
    protected $guarded =[];
    public function customers():HasMany{
        return $this->hasMany(Customer::class,'location_id','id');
    }
    public function businesses():HasMany{
        return $this->hasMany(Business::class,'location_id');
    }
}
