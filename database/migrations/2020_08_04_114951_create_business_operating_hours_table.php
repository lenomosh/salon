<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessOperatingHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_operating_hours', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('dow');
            $table->time('start_time');
            $table->time('end_time');
            $table->time('lunch_start_time');
            $table->integer('lunch_length');
            $table->enum('status',['OPEN','CLOSED'])->default('OPEN');
            $table->integer('business_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('business_operating_hours');
    }
}
