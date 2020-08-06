<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    protected $guarded = [];
    public function bookings():HasMany{
        return $this->hasMany(ServiceBooking::class,'service_id','id');
    }
    public function location():BelongsTo{
        return $this->belongsTo(Location::class,'id','location_id');
    }
}
