<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ServiceBooking extends Model
{
    protected $guarded =[];
    public function customer():BelongsTo
    {
        return $this->belongsTo(Customer::class,'id','customer_id');
    }
}
